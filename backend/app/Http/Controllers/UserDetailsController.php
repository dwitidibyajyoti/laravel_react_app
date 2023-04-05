<?php

namespace App\Http\Controllers;

use App\Models\UserDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class UserDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $data = $request->all();

        $validateData = Validator::make($request->all(),[
            'firstName' => 'required',
            'lastName' => 'required',
            'phone'=>'required|unique:user_details,number',
            'email'=>'required|unique:user_details',
            'dob'=>'required'
        ]);

        if($validateData->fails()){
           
            return response()->json([
                'status' => false,
                'message' => 'validation error',
                'errors' => $validateData->errors()->first()
            ], 401);
        }


        $input = $data['dob'];
        $date = strtotime($input);
        
        try {
            $userDetails = new UserDetails;
            $userDetails->first_name  = $data['firstName'];
            $userDetails->last_name = $data['lastName'];
            $userDetails->date_of_birth = date('Y-m-d H:i:s', $date);
            $userDetails->email = $data['email'];
            $userDetails->number = $data['phone'];
            $userDetails->save();     
        } catch (\Throwable $th) {

            
            return response()->json([
                'status' => false,
                'message' => 'data base error',
                'errors' => 'unable to store data'
            ], 401);
        }

        return response()->json([
            'status' => true,
            'message' => 'date successfully saved',
            'errors' => $validateData->errors()->first()
        ], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(UserDetails $userDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserDetails $userDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserDetails $userDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserDetails $userDetails)
    {
        //
    }
}
