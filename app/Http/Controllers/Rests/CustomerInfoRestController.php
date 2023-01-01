<?php

namespace App\Http\Controllers\Rests;

use App\Http\Controllers\BaseCustomController;
use App\Http\Responses\AjaxResponse;
use App\Models\CustomerInfo;
use Illuminate\Http\Request;
use Validator;

class CustomerInfoRestController extends BaseCustomController
{
    public function store(Request $request)
    {
        $ajax_response = new AjaxResponse();
        if ($request->post("showMessage")) {
            $email = $request->post("email");
            if (is_null($email))
                return $ajax_response->setMessage("Email không được phép bỏ trống")->toApiResponse();
            if (!$this->valid_email($email))
                return $ajax_response->setMessage("Email không hợp lệ")->toApiResponse();
            if (strlen($email) > 200)
                return $ajax_response->setMessage("Email không được phép vượt quá 200 ký tự")->toApiResponse();
        }
        $validator = Validator::make($request->all(),
            [
                'name' => 'required|string|max:200',
                'phone_number' => 'required|max:20',
                'email' => 'required|string|email|max:200',
                'message' => 'required|string|max:5000',
            ],
            [
                'email.required' => 'Email không được phép bỏ trống',
                'email.email' => 'Email không hợp lệ',
                'email.max' => 'Email không được phép vượt quá 200 ký tự',
                'name.required' => 'Họ và tên không được phép bỏ trống',
                'name.max' => 'Họ và tên không được phép vượt quá 200 ký tự',
                'phone_number.required' => 'Số điện thoại không được phép bỏ trống',
                'phone_number.max' => 'Số điện thoại không được phép vượt quá 20 ký tự',
                'message.required' => 'Lời nhắn không được phép bỏ trống',
                'message.max' => 'Lời nhắn không được phép vượt quá 5000 ký tự',
            ]);
        if ($validator->fails()) {
            return $ajax_response->setErrors($validator->errors())->toApiResponse();
        }
        $exist = CustomerInfo::where('email', $request->post("email"))->count();
        if ($exist > 0) return $ajax_response->setMessage("Thành công")->setStatus(2)->toApiResponse();
        $customer_info = new CustomerInfo();
        $customer_info->name = $request->post("name");
        $customer_info->phone_number = $request->post("phone_number");
        $customer_info->email = $request->post("email");
        $customer_info->message = $request->post("message");
        $customer_info->save();
        return $ajax_response->setMessage("Thành công")->setStatus(2)->toApiResponse();
    }

    public function storeInfo(Request $request)
    {
        $ajax_response = new AjaxResponse();
        if ($request->post("showMessage")) {
            $email = $request->post("email");
            if (is_null($email))
                return $ajax_response->setMessage("Email không được phép bỏ trống")->toApiResponse();
            if (!$this->valid_email($email))
                return $ajax_response->setMessage("Email không hợp lệ")->toApiResponse();
            if (strlen($email) > 200)
                return $ajax_response->setMessage("Email không được phép vượt quá 200 ký tự")->toApiResponse();
        }
        $validator = Validator::make($request->all(),
            [
                'email' => 'required|string|email|max:200',
            ],
            [
                'email.required' => 'Email không được phép bỏ trống',
                'email.email' => 'Email không hợp lệ',
                'email.max' => 'Email không được phép vượt quá 200 ký tự',
            ]);
        if ($validator->fails()) {
            return $ajax_response->setErrors($validator->errors())->toApiResponse();
        }
        $exist = CustomerInfo::where('email', $request->post("email"))->count();
        if ($exist > 0) return $ajax_response->setMessage("Thành công")->setStatus(2)->toApiResponse();
        $customer_info = new CustomerInfo();
        $customer_info->email = $request->post("email");
        $customer_info->save();
        return $ajax_response->setMessage("Thành công")->setStatus(2)->toApiResponse();
    }
}
