<?php

use App\Http\Controllers\Rests\AuthRestController;
use App\Http\Controllers\Rests\BlogRestController;
use App\Http\Controllers\Rests\CategoryRestController;
use App\Http\Controllers\Rests\CollectionRestController;
use App\Http\Controllers\Rests\ProjectRestController;
use App\Http\Controllers\Rests\UploadRestController;
use App\Http\Controllers\Rests\CommentRestController;
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
    Route::get('/count-pending-comment', [CommentRestController::class, 'countPendingComment']);
});
//
//
//
//Route::group(['prefix' => 'Project'], function () {
//    Route::get('/find-by-name', [ProjectRestController::class, 'findByName']);
//    Route::get('/find-by-collection', [ProjectRestController::class, 'findByCollection']);
//    Route::get('/find-all', [ProjectRestController::class, 'findAll']);
//    Route::get('/find-featured', [ProjectRestController::class, 'findFeatured']);
//    Route::get('/find-on-sale', [ProjectRestController::class, 'findOnSale']);
//    Route::get('/find-trending', [ProjectRestController::class, 'findTrending']);
//    Route::get('/find-top-rate', [ProjectRestController::class, 'findTopRate']);
//    Route::get('/find-flash-sale', [ProjectRestController::class, 'findFlashSale']);
//    Route::get('/detail', [ProjectRestController::class, 'detail']);
//});
//Route::group(['prefix' => 'category'], function () {
//    Route::get('/find-all', [CategoryRestController::class, 'findAll']);
//    Route::get('/find-all-without-child', [CategoryRestController::class, 'findAllWithoutChild']);
////    Route::get('/find-featured', [CategoryRestController::class, 'findFeatured']);
//    Route::get('/find-top', [CategoryRestController::class, 'findTop']);
//});
//Route::group(['prefix' => 'blog'], function () {
//    Route::get('/find-all', [BlogRestController::class, 'findAll']);
//    Route::get('/detail', [BlogRestController::class, 'detail']);
//    Route::get('/related', [BlogRestController::class, 'related']);
//    Route::get('/recent', [BlogRestController::class, 'recent']);
//});
//
//
//Route::group(['prefix' => 'contact'], function () {
//    Route::post('/save', [CustomerInfoRestController::class, 'store']);
//});

Route::post('/tai-anh', ['as' => 'uploadImage', UploadRestController::class, 'storeImage']);


