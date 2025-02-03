let translations={
    en:{
        home: "Home",about: "About Us",services: "Services",industries: "Industries",frameworks: "Frameworks",contact:"Contact Us", ourqualityassuranceteam:"Our Quality assurance team",ourworkspace:"Our WorkSpace",sol:"Soluations",maual:"Manual testing",auto:"test automation",perform:"Performance testing",control:"QA Control & Advisory",strategy:"QA Strategy & Process design",dev:"devOps",jira:"jira",end:"end to End Testing",sysandplat:"systems & platforms",web:"web apps",mob:"mobile apps",sap:"SAP",erp:"ERP",dynamic:"Dynamic CRM",fianancial:"Financial System",cover:"coverage",func:"functional Testing",nonfunc:"non-functional Testing",uiux:"UI&UX Testing",loadstress:"load & Stress Testing",systest:"system Testing",integration:"integration Testing",uat:"UAT Testing",local:"Localization Testing",adhoc:"Ad-Hoc Testing",api:"Api Testing",fintech:"fintech",health:"healthCare",business:"business app",travel:"travel",elearn:"e-learning",insurance:"insurance",ecommerce:"e-commerce",hr:"HR",selenium:"Selenium",playwright:"Playwright",testng:"TestNG",maven:"Maven",tosca:"Tosca",cucumber:"Cucumber",cypress:"Cypress",appium:"Appium",postman:"Postman",
        english:"English",arabic:"Arabic",german:"German",
        //contact
      gein:"Get in Touch",phnu:"Phone Number",emad:"Email Address",nu:"+20 101 609 6128",
    },
    ar:{
        home: "الصفحه الرئيسيه",about: "من نحن",services: "الخدمات",industries: "الصناعات",frameworks: "النطاقات",contact:"تواصل معانا",ourqualityassuranceteam:"فريق ضمان الجودة لدينا",ourworkspace:"مساحة عملنا",sol:"الحلول",maual:"الاختبار اليدوي",auto:"test autmoation",perform:"اختبار الأداء",control:"مراقبة الجودة والاستشارات",strategy:"استراتيجية ضمان الجودة وتصميم العملية",dev:"DevOps",jira:"Jira",end:"الاختبار من النهاية إلى النهاية",sysandplat:"الأنظمة والمنصات",web:"تطبيقات الويب",mob:"تطبيقات الجوال",sap:"SAP",erp:"تخطيط موارد المؤسسات",dynamic:"إدارة علاقات العملاء الديناميكية",fianancial:"النظام المالي",cover:"التغطية",func:"Functional Testing",nonfunc:"non-functional Testing",uiux:"اختبار واجهة المستخدم وتجربة المستخدم",loadstress:" اختبار الضغط والتحمل",systest:"اختبار النظام",integration:"اختبار التكامل",uat:"UAT",local:"Localization",adhoc:"AdHoc",api:"اختبار واجهة برمجة التطبيقات",fintech:"تطبيقات التكنولوجيا الماليه",health:"تطبيقات الرعايه الصحيه",business:" تطبيقات الأعمال الخاصه",travel:"السفر",elearn:"تطبيقات المنصات التعليميه",insurance:"التأمين",ecommerce:"تطبيقات التجاره الاليكترونيه",hr:"HR",selenium:"Selenium",playwright:"Playwright",testng:"TestNG",maven:"Maven",tosca:"Tosca",cucumber:"Cucumber",cypress:"Cypress",appium:"Appium",postman:"Postman",
        english:"الأنجليزيه",arabic:"العربيه",german:"الألمانيه",
        //contact
     gein:"تواصل معنا",phnu:"رقم التليفون",emad:"عنوان البريد الإلكتروني",nu:"01016096128",
    },
    ge:{
        home: "heim",about: "über uns",services: "Dienstleistungen",industries: "Branchen",frameworks: "Rahmenbedingungen",contact:"kontaktiere uns",ourqualityassuranceteam:"unser Qualitätssicherungsteam",ourworkspace:"Unser Arbeitsbereich",sol:"Lösungen",maual:"Manuelles Testen",auto:"Testautomatisierung",perform:"Leistungstests",control:"Qualitätssicherung und Beratung",strategy:"QA-Strategie und Prozessdesign",dev:"devOps",jira:"jira",end:"End-to-End-Tests",sysandplat:"Systeme & Plattformen",web:"Web-Apps",mob:"mobile apps",sap:"SAP",erp:"ERP",dynamic:"Dynamisches CRM",fianancial:"Finanzsystem",cover:"Abdeckung",func:"functional-Tests",nonfunc:"non-functional-Tests",uiux:"UI&UX-Tests",loadstress:"load & Stress-Tests",systest:"system-Tests",integration:"Integrations-Tests",uat:"UAT-Tests",local:"Lokalisierungs-Tests",adhoc:"Ad-hoc-Tests",api:"API-Tests",fintech:"fintech",health:"Gesundheitspflege",business:"Business-App",travel:"reisen",elearn:"e-learning",insurance:"Versicherung",ecommerce:"elektronischer Handel",hr:"HR",selenium:"Selenium",playwright:"Playwright",testng:"TestNG",maven:"Maven",tosca:"Tosca",cucumber:"Cucumber",cypress:"Cypress",appium:"Appium",postman:"Postman",
        english:"English",arabic:"Arabish",german:"German",
         //contact
    gein:"Kontaktieren Sie uns",phnu:"Telefonnummer",emad:"E-Mail-Adresse",nu:"+20 101 609 6128",
     
    },
}
let languageSelector= document.querySelector("select");

languageSelector.addEventListener("change",(e)=>{
   
    selectLanguage(e.target.value);
    
    localStorage.setItem("lang",e.target.value);
});
window.onload = function (){
    let language=localStorage.getItem("lang");
    selectLanguage(language);
}

const selectLanguage=(language) => {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach((element)=>{
            const translationsKey = element.getAttribute("data-i18n");
            element.textContent= translations[language][translationsKey];
        });
        document.dir = language === "ar" ? "rtl" : "ltr";
        
};
function sendMail(){
    
    let parms ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("number").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_x7gei1p","template_dw3usto",parms).then(response => {
        console.log("Email sent successfully:", response);
        Swal.fire({
            title: "Thanks for contacting us!",
            text: "Our marketing Team will contact you in your email Soon!",
            icon: "success"
          });
         
    })
    .catch(error => {
        console.error("Error sending email:", error);
        alert("Failed to send order.");
       
    });
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("message").value="";
 };