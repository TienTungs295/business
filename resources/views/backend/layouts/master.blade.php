<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Quản trị DMT</title>
    <meta content="" name="description">
    <meta content="" name="keywords">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Favicons -->
    <link href="{{ asset('img/favicon.png') }}" rel="icon">
    <link href="{{ asset('img/apple-touch-icon.png') }}" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="{{ asset('vendor/toastr/css/toastr.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="{{ asset('vendor/date-picker/css/jquery-ui.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/jquery-upload/css/jquery.uploader.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/quill/quill.snow.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/quill/quill.bubble.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-timepicker-addon/1.6.3/jquery-ui-timepicker-addon.min.css">

    <!-- Template Main CSS File -->
    <link href="{{ asset('css/backend.css') }}" rel="stylesheet">
</head>

<body>
@include('backend.layouts.header')
@include('backend.layouts.sidebar_left')
<main id="main" class="main">
    @yield('content')
</main>
@include('backend.layouts.footer')

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>

<!-- Vendor JS Files -->
<!--<script src="{{ asset('vendor/apexcharts/apexcharts.min.js') }}"></script>-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="{{ asset('vendor/jquery-upload/js/jquery.uploader.min.js') }}"></script>
<script src="{{ asset('vendor/tinymce/tinymce.min.js') }}"></script>
<script src="{{ asset('vendor/toastr/js/toastr.min.js') }}"></script>
<script src="{{ asset('vendor/date-picker/js/jquery-ui.js') }}"></script>
<script src="{{ asset('vendor/date-picker/js/jquery.ui.datepicker-vi.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-timepicker-addon/1.6.3/jquery-ui-timepicker-addon.min.js"></script>

<!-- Template Main JS File -->
<!--<script src="{{ asset('js/app.js') }}"></script>-->
<script src="{{ asset('js/main.js') }}"></script>
<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    var existSuccess = '{{Session::has('success')}}';
    var existError = '{{Session::has('error')}}';
    var msg;
    if (existSuccess) {
        msg = '{{Session::get('success')}}';
        toastr.success(msg);
    } else if (existError) {
        msg = '{{Session::get('error')}}';
        toastr.error(msg);
    }

    let APP_URL = {!! json_encode(url('/')) !!};

    $.ajax({
        url: APP_URL + "/rest/comment/count-pending-comment",
        contentType: "json",
        method: "GET",
        success: function (res) {
            let totalPendingComments = res.data || 0;
            $("#total-pending-comments").text(totalPendingComments);
        },
        error: function (response) {
        }
    });
</script>
@yield('morescripts')
</body>
</html>
