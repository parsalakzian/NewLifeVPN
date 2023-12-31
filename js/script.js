var languages = {
    fa:{
        lang : "English",
        appname : "نیولایف وی پی ان",
        Home : "خانه",
        features : "ویژگی ها",
        Reviews : "نظرات",
        Download : "دانلود",
        ttitle : "یک فیلتر شکن رایگان برای هر نوع استفاده ای از نیولایف",
        tsub : "بهترین برنامه برای رفع فیلترینگ در این بازه زمانی",
        NewLife : "نیولایف",
        freeprog : "برنامه نویسان آزاد",
        Usability : "قابلیت استفاده",
        Usabilitysub : "برنامه های قابل استفاده اسان از نیولایف",
        justwork : "فقط کار کردن",
        justworksub : "برنامه های ما همیشه کار میکنند چون ما جزو مردم هستیم",
        unlimup : "کارکرد بی نهایت",
        unlimupsub : "ما هیچوقت از به روز رسانی ها خسته نمی شویم",
        ascreen : "تصاویر",
        ascreensub : "بکشید و رها کنید",
        wscreen : "تصاویر ویندوز",
        nfeatures : "ویژگی های جدید",
        nfeaturessub : "ما را در شبکه های اجتماعی دنبال کنید تا از اخرین به روز رسانی ها با خبر شوید",
        rls : "سرور های در لحظه",
        rlssub : "شما جدید ترین سرور ها را بدون نیاز به به روز رسانی برنامه دریافت خواهید کرد",
        powerb : "بکند قدرتمند",
        powerbsub : "دارای بکند قوی و بسیار امن و در حال به روز رسانی",
        whatp : "در مورد این برنامه چه می گویند",
        rev1 : "نیولایف وی پی ان جدیده اما بسیار سریع و قابل استفاده است ممنون نیولایف",
        rev1n : "مهیار",
        rev2 : "اولین فیلتر شکن رایگان برای هر استفاده ای در ویندوز ممنونم",
        rev2n : "سپهر",
        dll : "چطور برنامه رو دریافت کنم؟",
        dlls : "برای تشخیص خودکار نوع دستگاه از دانلود استفاده کنید و برای دیدن تمام نسخه ها از گیتهاب",
        dlls2 : "اول نسخه قبل را حذف نمایید",
    }
}
if(window.location.pathname){
    if(window.location.pathname === "/fa"){
        document.title = languages.fa.appname;
        langset.href = '/';
        document.body.lang = "fa";
        langset.textContent = languages.fa.lang;
        appname.textContent = languages.fa.appname;
        Home.textContent = languages.fa.Home;
        features.textContent = languages.fa.features;
        Features2.textContent = languages.fa.features;
        Features3.textContent = languages.fa.features;
        Reviews.textContent = languages.fa.Reviews;
        Download.textContent = languages.fa.Download;
        Download2.textContent = languages.fa.Download;
        ttitle.textContent = languages.fa.ttitle;
        tsub.textContent = languages.fa.tsub;
        NewLife.textContent = languages.fa.NewLife;
        freeprog.textContent = languages.fa.freeprog;
        Usability.textContent = languages.fa.Usability;
        Usabilitysub.textContent = languages.fa.Usabilitysub;
        justwork.textContent = languages.fa.justwork;
        justworksub.textContent = languages.fa.justworksub;
        unlimup.textContent = languages.fa.unlimup;
        unlimupsub.textContent = languages.fa.unlimupsub;
        ascreen.textContent = languages.fa.ascreen;
        ascreensub.textContent = languages.fa.ascreensub;
        wscreen.textContent = languages.fa.wscreen;
        wscreensub.textContent = languages.fa.ascreensub;
        nfeatures.textContent = languages.fa.nfeatures;
        nfeaturessub.textContent = languages.fa.nfeaturessub;
        rls.textContent = languages.fa.rls;
        rlssub.textContent = languages.fa.rlssub;
        powerb.textContent = languages.fa.powerb;
        powerbsub.textContent = languages.fa.powerbsub;
        whatp.textContent = languages.fa.whatp;
        whatpsub.textContent = languages.fa.Reviews;
        rev1.textContent = languages.fa.rev1;
        rev1n.textContent = languages.fa.rev1n;
        rev2.textContent = languages.fa.rev2;
        rev2n.textContent = languages.fa.rev2n;
        dll.textContent = languages.fa.dll;
        dlls.textContent = languages.fa.dlls;
        dlls2.textContent = languages.fa.dlls2;
        home2.textContent = languages.fa.Home;
        Features4.textContent = languages.fa.features;
        Reviews2.textContent = languages.fa.Reviews;
        Download3.textContent = languages.fa.Download;
        appname2.textContent = languages.fa.appname;
    }
}

var reload = langset;


reload.onclick = function(){
    window.location.hash = this.getAttribute('href');
    window.location.reload();
}
