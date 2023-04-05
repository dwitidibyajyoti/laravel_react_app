<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AddressController extends Controller
{
    
    public function store(Request $request)
    {
        
        try {
            $dataClient = new Address;
            $dataClient->address  = json_encode($request->all()['address']);
            $dataClient->save();     
        } catch (\Throwable $th) {
            return $this->response([
                'error' => [
                    'message' => 'unable to store address.',
                    'status_code' => 500
                ]
            ]);
        }

       
        
        return response()->json(['message' => 'address store successfully','status'=>true], 201);
    }
}
