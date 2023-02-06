<?php

use Illuminate\Support\Facades\Route;
// コントローラーとの連携。Laravel6には必要なかった。
use App\Http\Controllers\TextController;

// modelとの連携。
use App\Models\Text;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::resource('/text', 'App\Http\Controllers\TextController', ['only' => ['store', 'destroy']]);
Route::patch('text/{id}', [TextController::class, 'checked'])->name('text.checked');
Route::patch('text/{id}/unchecked', [TextController::class, 'unchecked'])->name('text.unchecked');
Route::get('text/deleteList', [TextController::class, 'deleteList'])->name('text.deleteList');
Route::patch('text/deleteList/{trashed_text}', [TextController::class, 'restore'])->name('text.restore');
