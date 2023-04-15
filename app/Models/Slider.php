<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;


class Slider extends Model implements TranslatableContract
{
    use HasFactory;
    use Translatable;

    protected $table = 'slider';
    protected $fillable = [
        'id',
        'image',
        'user_id',
        'priority',
    ];

    public $translatedAttributes = ['description'];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
