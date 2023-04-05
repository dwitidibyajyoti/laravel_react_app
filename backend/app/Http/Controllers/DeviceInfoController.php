<?php

namespace App\Http\Controllers;

use App\Models\DeviceInfo;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;

use Jenssegers\Agent\Facades\Agent;

class DeviceInfoController extends Controller
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
        try {
            $dataClient = new DeviceInfo;
            $dataClient->ip_address  = $request->ip();
            $dataClient->device_type = Agent::platform();
            $dataClient->browser = Agent::browser();
            $dataClient->user_agent = $request->header('User-Agent');
            $dataClient->save();     
        } catch (\Throwable $th) {
            return $this->response([
                'error' => [
                    'message' => 'unable to store use device data.',
                    'status_code' => 500
                ]
            ]);
        }

       
        
        return response()->json(['message' => 'User device info successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(DeviceInfo $deviceInfo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DeviceInfo $deviceInfo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DeviceInfo $deviceInfo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeviceInfo $deviceInfo)
    {
        //
    }
}
