<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    // Create a new project
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'url' => 'nullable|url',
        ]);

        $project = Project::create($request->only(['title', 'description', 'url']));
        return response()->json($project, 201);
    }

    // Retrieve all projects
    public function index()
    {
        return response()->json(Project::all());
    }

    // Retrieve a specific project
    public function show($id)
    {
        $project = Project::findOrFail($id);
        return response()->json($project);
    }

    // Update a project
    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'url' => 'nullable|url',
        ]);

        $project->update($request->only(['title', 'description', 'url']));
        return response()->json($project);
    }

    // Delete a project
    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();
        return response()->json(null, 204);
    }
}