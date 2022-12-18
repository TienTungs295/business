<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Rests\WithListRestController;
use App\Http\Controllers\Rests\CartRestController;
use App\Http\Controllers\Rests\OrderRestController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by RouteServiceProvider RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => ['isMember', 'auth:web', 'preventBackHistory'], 'prefix' => 'quan-tri'], function () {
    Route::get('/', ['as' => 'homeView', 'uses' => 'HomeController@index']);

    Route::group(['prefix' => 'danh-muc-du-an'], function () {
        Route::get('', ['as' => 'projectCategoryView', 'uses' => 'ProjectCategoryController@index']);
        Route::get('/them-moi', ['as' => 'createProjectCategoryView', 'uses' => 'ProjectCategoryController@create']);
        Route::get('/chinh-sua/{id}', ['as' => 'updateProjectCategoryView', 'uses' => 'ProjectCategoryController@edit']);
        Route::post('/luu-tru', ['as' => 'createProjectCategory', 'uses' => 'ProjectCategoryController@store']);
        Route::post('/cap-nhat/{id}', ['as' => 'updateProjectCategory', 'uses' => 'ProjectCategoryController@update']);
        Route::post('/xoa/{id}', ['as' => 'deleteProjectCategory', 'uses' => 'ProjectCategoryController@destroy']);
    });

    Route::group(['prefix' => 'danh-muc-bai-viet'], function () {
        Route::get('', ['as' => 'postCategoryView', 'uses' => 'PostCategoryController@index']);
        Route::get('/them-moi', ['as' => 'createPostCategoryView', 'uses' => 'PostCategoryController@create']);
        Route::get('/chinh-sua/{id}', ['as' => 'updatePostCategoryView', 'uses' => 'PostCategoryController@edit']);
        Route::post('/luu-tru', ['as' => 'createPostCategory', 'uses' => 'PostCategoryController@store']);
        Route::post('/cap-nhat/{id}', ['as' => 'updatePostCategory', 'uses' => 'PostCategoryController@update']);
        Route::post('/xoa/{id}', ['as' => 'deletePostCategory', 'uses' => 'PostCategoryController@destroy']);
    });

    Route::group(['prefix' => 'bai-viet'], function () {
        Route::get('', ['as' => 'postView', 'uses' => 'PostController@index']);
        Route::get('/them-moi', ['as' => 'createPostView', 'uses' => 'PostController@create']);
        Route::get('/chinh-sua/{id}', ['as' => 'updatePostView', 'uses' => 'PostController@edit']);
        Route::post('/luu-tru', ['as' => 'createPost', 'uses' => 'PostController@store']);
        Route::post('/cap-nhat/{id}', ['as' => 'updatePost', 'uses' => 'PostController@update']);
        Route::post('/xoa/{id}', ['as' => 'deletePost', 'uses' => 'PostController@destroy']);
    });

    Route::group(['prefix' => 'du-an'], function () {
        Route::get('', ['as' => 'projectView', 'uses' => 'ProjectController@index']);
        Route::get('/them-moi', ['as' => 'createProjectView', 'uses' => 'ProjectController@create']);
        Route::get('/chinh-sua/{id}', ['as' => 'updateProjectView', 'uses' => 'ProjectController@edit']);
        Route::post('/luu-tru', ['as' => 'createProject', 'uses' => 'ProjectController@store']);
        Route::post('/cap-nhat/{id}', ['as' => 'updateProject', 'uses' => 'ProjectController@update']);
        Route::post('/xoa/{id}', ['as' => 'deleteProject', 'uses' => 'ProjectController@destroy']);
    });


    Route::group(['prefix' => 'binh-luan'], function () {
        Route::get('', ['as' => 'commentView', 'uses' => 'CommentController@index']);
        Route::post('/xoa/{id}', ['as' => 'deleteComment', 'uses' => 'CommentController@destroy']);
        Route::post('/cap-nhat-trang-thai/{id}', ['as' => 'changeCommentStatus', 'uses' => 'CommentController@changeStatus']);
    });

    Route::group(['prefix' => 'lien-he'], function () {
        Route::get('', ['as' => 'customerInfoView', 'uses' => 'CustomerInfoController@index']);
        Route::post('/xoa/{id}', ['as' => 'deleteCustomerInfo', 'uses' => 'CustomerInfoController@destroy']);
    });

    Route::group(['middleware' => 'isAdmin', 'prefix' => 'nhan-vien'], function () {
        Route::get('', ['as' => 'userView', 'uses' => 'UserController@index']);
        Route::get('/them-moi', ['as' => 'createUserView', 'uses' => 'UserController@create']);
        Route::get('/chinh-sua/{id}', ['as' => 'updateUserView', 'uses' => 'UserController@edit']);
        Route::post('/luu-tru', ['as' => 'createUser', 'uses' => 'UserController@store']);
        Route::post('/cap-nhat/{id}', ['as' => 'updateUser', 'uses' => 'UserController@update']);
        Route::post('/xoa/{id}', ['as' => 'deleteUser', 'uses' => 'UserController@destroy']);
    });
});

Route::any('{all}', function () {
    return view('frontend.index');
})->where(['all' => '^((?!rest|quan-tri).)*$']);;

