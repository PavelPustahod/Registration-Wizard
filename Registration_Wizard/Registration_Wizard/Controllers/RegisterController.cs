using System;
using System.Web.Mvc;
using Registration_Wizard.Models;
using CaptchaMvc.HtmlHelpers;
using Registration_Wizard.Util;

namespace Registration_Wizard.Controllers
{
    public class RegisterController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(User model)
        {
            var bufModel = TempData["myModel"] as User ?? new User();
            bufModel.Salutation = model.Salutation;
            bufModel.Name = model.Name;
            bufModel.MiddleName = model.MiddleName;
            bufModel.LastName = model.LastName;
            bufModel.Company = model.Company;
            bufModel.Title = model.Title;
            bufModel.LastName = model.LastName;
            bufModel.Email = model.Email;
            bufModel.Phone = model.Phone;
            bufModel.Fax = model.Fax;
            bufModel.Mobile = model.Mobile;
            TempData["myModel"] = bufModel;
            return RedirectToAction("Step2");
        }

        [HttpGet]
        public ActionResult Step2()
        {
            var model = TempData["myModel"] as User;
            return View(model);
        }

        [HttpPost]
        public ActionResult Step2(User model)
        {
            var bufModel = TempData["myModel"] as User;
            if(bufModel == null)
            {
                return RedirectToAction("Index");
            }
            else
            {
                bufModel.FinanceRemit = model.FinanceRemit;
                bufModel.EngineerAll = model.EngineerAll;
                bufModel.EngineerLaunch = model.EngineerLaunch;
                bufModel.EngineerTrip = model.EngineerTrip;
                bufModel.EngineerRead = model.EngineerRead;
                bufModel.Comment = model.Comment;
                TempData["myModel"] = bufModel;
                return RedirectToAction("Step3");
            }

        }


        [HttpGet]
        public ActionResult Step3()
        {
            var model = TempData["myModel"] as User;
            return View(model);
        }

        [HttpPost]
        public ActionResult Step3(User model)
        {
            var bufModel = TempData["myModel"] as User;
            if (bufModel == null)
            {
                return RedirectToAction("Index");
            }
            else
            {
                bufModel.Country = model.Country;
                bufModel.OfficeName = model.OfficeName;
                bufModel.Address = model.Address;
                bufModel.PostalCode = model.PostalCode;
                bufModel.City = model.City;
                bufModel.State = model.State;
                TempData["myModel"] = bufModel;
                return RedirectToAction("Step4");
            }
        }

        [HttpGet]
        public ActionResult Step4()
        {
            var model = TempData["myModel"] as User;
            return View(model);
        }

        [HttpPost]
        public ActionResult Step4(User u)
        {
            if (this.IsCaptchaValid("Captcha is not valid"))
            {
                var final_model = TempData["myModel"] as User;
                if (final_model == null)
                {
                    return RedirectToAction("Index");
                }
                else
                {
                    final_model.Password = u.Password;
                    UserContext context = new UserContext();
                    context.Users.Add(final_model);
                    context.SaveChanges();
                    return RedirectToAction("FinalPage");
                }       
            }

            ViewBag.ErrMessage = "Error: captcha is not valid.";
            var model = TempData["myModel"] as User;
            return View(model);
        }



        public ActionResult FinalPage()
        {
            
            return View();
        }

    }
}