<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'identification' => 'unique:users',
            'email' => 'unique:users',
        ]);

        $errors = $validator->errors();
        $fields = $request->all();

        if ($validator->fails()) {
            return response()->json($errors, 500);
        } else {
            return User::create($fields);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $rules = [
            'email' => 'unique:users,email, ' . $user->id,
            'identification' => 'unique:users,identification, ' . $user->id,
        ];

        $this->validate($request, $rules);

        if ($request->has('names')){
            $user->names = $request->names;
        }

        if ($request->has('surnames')){
            $user->surnames = $request->surnames;
        }

        if ($request->has('email') && $user->email != $request->email){
            $user->email = $request->email;
        }
        if ($request->has('identification') && $user->identification != $request->identification){
            $user->identification = $request->identification;
        }

        if ($request->has('phone')){
            $user->phone = $request->phone;
        }

        if (!$user->isDirty()){
            return response()->json(['error' => 'Se debe especificar al menos un valor diferente para actualizar', ' code' => 422], 422);
        }

        $user->save();

        return response()->json(['error' => $user], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::FindOrFail($id);
        $user->delete();

        return 204;
    }
}
