<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\DeviceInfoController;
use App\Http\Controllers\UserDetailsController;
use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });




Route::post('device-info', [DeviceInfoController::class,'store']);
Route::post('user-details', [UserDetailsController::class,'store']);
Route::post('address', [AddressController::class,'store']);

