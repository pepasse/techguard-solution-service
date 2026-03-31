<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact; // Assuming you have a Contact model to interact with your database

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        // Validate the request
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        // Create a new contact entry in the database
        $contact = new Contact();
        $contact->name = $validatedData['name'];
        $contact->email = $validatedData['email'];
        $contact->message = $validatedData['message'];
        $contact->save();

        // Return a response
        return response()->json(['message' => 'Contact form submitted successfully.'], 201);
    }
}