<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceInfo extends Model
{
    use HasFactory;

    use HasFactory;
    protected $table = 'device_info';
    protected $fillable = [
		'ip_address',
		'device_type',
		'browser',
        'user_agent'
	];

}
