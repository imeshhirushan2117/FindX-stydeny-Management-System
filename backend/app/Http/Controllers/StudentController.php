<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        return Student::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:students,email',
            'birthdate' => 'required|date',
            'city' => 'required|string|max:255',
            'contact_number' => 'required|string|max:15',
        ]);

        return Student::create($validatedData);
    }

    public function update(Request $request,  $id)
    {
        $student = Student::findOrFail($id);
        $student->update($request->all());
        return response()->json($student, 200);
    }
}
