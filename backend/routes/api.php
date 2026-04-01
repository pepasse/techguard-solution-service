<?php
use App\Http\Controllers\{ServiceController, ProjectController, ContactController};
use Illuminate\Support\Facades\Route;

Route::apiResource('services', ServiceController::class);
Route::apiResource('projects', ProjectController::class);
Route::post('/contacts', [ContactController::class, 'store']);
Route::get('/contacts', [ContactController::class, 'index']);
Route::get('/contacts/{id}', [ContactController::class, 'show']);
Route::put('/contacts/{id}', [ContactController::class, 'update']);
Route::delete('/contacts/{id}', [ContactController::class, 'destroy']);
