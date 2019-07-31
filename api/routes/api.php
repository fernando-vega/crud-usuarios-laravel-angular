<?php

use Illuminate\Http\Request;

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

// Show all
Route::get('users', 'UserController@index');
// Show id
Route::get('users/{id}', 'UserController@show');
// Store
Route::post('users', 'UserController@store');
// Update id
Route::put('users/{id}', 'UserController@update');
// Delete id
Route::delete('users/{id}', 'UserController@destroy');
