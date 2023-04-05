<!doctype html>
<html lang="en">
<head>

    <!-- Basic -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>DMT | MEP Design Ecosystem</title>

    <meta property="og:image" content="https://dmt.net.vn/assets/img/business-image/slider/banner1.png" />
    <meta name="keywords" content="MEP Consultant" />
    <meta name="description" content="MEP Consultant">
{{--    <meta name="author" content="okler.net">--}}

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{asset('/assets/img/business-image/logo/dmt-logo.png')}}" type="image/x-icon" />
    <link rel="apple-touch-icon" href="{{asset('/assets/img/business-image/logo/dmt-logo.png')}}">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no">

    <!-- Web Fonts  -->
    <link id="googleFonts" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap" rel="stylesheet" type="text/css">

    <!-- Vendor CSS -->
    <link rel="stylesheet" href="{{asset('assets/vendor/bootstrap/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendor/fontawesome-free/css/all.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendor/animate/animate.compat.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendor/simple-line-icons/css/simple-line-icons.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendor/owl.carousel/assets/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendor/owl.carousel/assets/owl.theme.default.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendor/magnific-popup/magnific-popup.min.css')}}">

    <link rel="stylesheet" href="{{ asset('css/app.css?version=31') }}">

    <!-- Head Libs -->
    <script src="{{asset('assets/vendor/modernizr/modernizr.min.js')}}"></script>

</head>
<body data-plugin-scroll-spy data-plugin-options="{'target': '#sidebar'}">
<div id="app">
</div>
<script src="{{ asset('js/app.js?version=31') }}"></script>

<!-- Latest jQuery -->
{{--<script src="{{asset('assets/js/jquery/jquery-3.6.0.min.js')}}"></script>--}}

<!-- owl-carousel min js  -->
{{--<script src="{{asset('assets/owlcarousel/js/owl.carousel.min.js')}}"></script>--}}
<!-- Messenger Plugin chat Code -->
<div id="fb-root"></div>

<!-- Your Plugin chat code -->
<div id="fb-customer-chat" class="fb-customerchat">
</div>

<script>
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "104798685810981");
    chatbox.setAttribute("attribution", "biz_inbox");
</script>

<!-- Your SDK code -->
<script>
    window.fbAsyncInit = function() {
        FB.init({
            xfbml            : true,
            version          : 'v16.0'
        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>

</body>
</html>
