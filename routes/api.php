<?php

use App\Http\Controllers\Rests\ProjectCategoryRestController;
use App\Http\Controllers\Rests\ProjectFieldRestController;
use App\Http\Controllers\Rests\ProjectRestController;
use App\Http\Controllers\Rests\UploadRestController;
use App\Http\Controllers\Rests\CommentRestController;
use App\Http\Controllers\Rests\PostRestController;
use App\Http\Controllers\Rests\ProjectAreaRestController;
use App\Http\Controllers\Rests\PostCategoryRestController;
use App\Http\Controllers\Rests\CustomerInfoRestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Below mention routes are available only for the authenticated users.

Route::group(['prefix' => 'comment'], function () {
    Route::get('/find-by-post', [CommentRestController::class, 'findByPost']);
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

Route::post('/tai-anh', ['as' => 'uploadImage', UploadRestController::class, 'storeImage']);


