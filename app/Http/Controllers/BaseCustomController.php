<?php

namespace App\Http\Controllers;


use App\Http\Responses\AjaxResponse;
use App\Models\Discount;
use App\Models\Project;
use App\Models\ProjectCategory;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Cart;

class BaseCustomController extends Controller
{
    protected function valid_email($str)
    {
        return (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $str)) ? FALSE : TRUE;
    }
}
