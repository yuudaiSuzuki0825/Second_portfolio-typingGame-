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
// エラーメッセージの代わりにトップページにリダイレクトさせている。
Route::get('/text', [TextController::class, 'notFound'])->name('text.notFound');
Route::resource('/text', 'App\Http\Controllers\TextController', ['only' => ['store', 'destroy']]);
// エラーメッセージの代わりにトップページにリダイレクトさせている。また，「Route::get('text/deleteList',」とuriが被ってしまうのを防ぐために{id}は数値のみ受け付けるようにした。
Route::get('text/{id}', [TextController::class, 'notFound'])->name('text.notFound')->where('id', '[0-9]+');
Route::patch('text/{id}', [TextController::class, 'checked'])->name('text.checked');
Route::patch('text/{id}/unchecked', [TextController::class, 'unchecked'])->name('text.unchecked');
Route::get('text/deleteList', [TextController::class, 'deleteList'])->name('text.deleteList');
Route::patch('text/deleteList/{trashed_text}', [TextController::class, 'restore'])->name('text.restore');
Route::delete('text/deleteList/{trashed_text}', [TextController::class, 'forceDelete'])->name('text.forceDelete');
