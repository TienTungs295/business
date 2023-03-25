<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Rests\ProjectCategoryRestController;
use App\Http\Controllers\Rests\ProjectFieldRestController;
use App\Http\Controllers\Rests\ProjectRestController;
use App\Http\Controllers\Rests\UploadRestController;
use App\Http\Controllers\Rests\CommentRestController;
use App\Http\Controllers\Rests\PostRestController;
use App\Http\Controllers\Rests\ProjectAreaRestController;
use App\Http\Controllers\Rests\PostCategoryRestController;
use App\Http\Controllers\Rests\CustomerInfoRestController;

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

//web
Route::prefix('{locale?}')
    ->where(['locale' => '[a-zA-Z]{2}'])
    ->middleware('setLocale')
    ->group(function () {
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

            Route::group(['prefix' => 'linh-vuc'], function () {
                Route::get('', ['as' => 'projectFieldView', 'uses' => 'ProjectFieldController@index']);
                Route::get('/them-moi', ['as' => 'createProjectFieldView', 'uses' => 'ProjectFieldController@create']);
                Route::get('/chinh-sua/{id}', ['as' => 'updateProjectFieldView', 'uses' => 'ProjectFieldController@edit']);
                Route::post('/luu-tru', ['as' => 'createProjectField', 'uses' => 'ProjectFieldController@store']);
                Route::post('/cap-nhat/{id}', ['as' => 'updateProjectField', 'uses' => 'ProjectFieldController@update']);
                Route::post('/xoa/{id}', ['as' => 'deleteProjectField', 'uses' => 'ProjectFieldController@destroy']);
            });

            Route::group(['prefix' => 'khu-vuc'], function () {
                Route::get('', ['as' => 'projectAreaView', 'uses' => 'ProjectAreaController@index']);
                Route::get('/them-moi', ['as' => 'createProjectAreaView', 'uses' => 'ProjectAreaController@create']);
                Route::get('/chinh-sua/{id}', ['as' => 'updateProjectAreaView', 'uses' => 'ProjectAreaController@edit']);
                Route::post('/luu-tru', ['as' => 'createProjectArea', 'uses' => 'ProjectAreaController@store']);
                Route::post('/cap-nhat/{id}', ['as' => 'updateProjectArea', 'uses' => 'ProjectAreaController@update']);
                Route::post('/xoa/{id}', ['as' => 'deleteProjectArea', 'uses' => 'ProjectAreaController@destroy']);
            });
        });
    });

Route::get('/quan-tri', function () {
    return redirect()->route('homeView', app()->getLocale());
});

Route::any('{all}', function () {
    return view('frontend.index');
})->where(['all' => '^((?!rest|quan-tri|vi|en|cn|jp|kr).)*$']);

//api
Route::prefix('rest')
    ->group(function () {
        Route::middleware('localization')
            ->group(function () {
                Route::group(['prefix' => 'comment'], function () {
                    Route::get('/find-by-post', [CommentRestController::class, 'findByPost']);
                    Route::get('/count-pending-comment', [CommentRestController::class, 'countPendingComment']);
                    Route::post('/save', [CommentRestController::class, 'save']);
                });

                Route::group(['prefix' => 'project'], function () {
                    Route::get('/find-all', [ProjectRestController::class, 'findAll']);
                    Route::get('/find-random', [ProjectRestController::class, 'findRandom']);
                    Route::get('/detail', [ProjectRestController::class, 'detail']);
                });


                Route::group(['prefix' => 'post-category'], function () {
                    Route::get('/find-all', [PostCategoryRestController::class, 'findAll']);
                });

                Route::group(['prefix' => 'post'], function () {
                    Route::get('/find-all', [PostRestController::class, 'findAll']);
                    Route::get('/detail', [PostRestController::class, 'detail']);
                    Route::get('/related', [PostRestController::class, 'related']);
                    Route::get('/recent', [PostRestController::class, 'recent']);
                    Route::get('/count-all', [PostRestController::class, 'countAll']);
                });
                Route::group(['prefix' => 'project-category'], function () {
                    Route::get('/find-all', [ProjectCategoryRestController::class, 'findAll']);
                    Route::get('/find-default', [ProjectCategoryRestController::class, 'findDefaultCategory']);
                });

                Route::group(['prefix' => 'project-area'], function () {
                    Route::get('/find-all', [ProjectAreaRestController::class, 'findAll']);
                });

                Route::group(['prefix' => 'project-field'], function () {
                    Route::get('/find-all', [ProjectFieldRestController::class, 'findAll']);
                });

                Route::group(['prefix' => 'contact'], function () {
                    Route::post('/save', [CustomerInfoRestController::class, 'store']);
                    Route::post('/save-email', [CustomerInfoRestController::class, 'storeEmail']);
                });
            });

        Route::group(['prefix' => 'locale'], function () {
            Route::post('/changeLocale', [\App\Http\Controllers\Rests\LocaleRestController::class, 'changeLocale']);
            Route::get('/getLocale', [\App\Http\Controllers\Rests\LocaleRestController::class, 'getLocale']);
        });

        Route::post('/tai-anh', ['as' => 'uploadImage', UploadRestController::class, 'storeImage']);
    });









