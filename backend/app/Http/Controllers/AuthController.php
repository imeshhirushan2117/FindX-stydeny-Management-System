<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    //user register
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required | string | max:255',
            'email' => 'required | email | string |unique:users',
            'password' => 'required | string | max:10 | confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'massage' => 'User registered successfully',
            'user' => $user,
        ]);
    }
}
