<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;


class ProjectArea extends Model implements TranslatableContract
{
    use HasFactory;
    use Translatable;

    protected $table = 'project_area';
    protected $fillable = [
        'id',
//        'name',
        'priority',
    ];

    public $translatedAttributes = ['name'];

    public function projects()
    {
        return $this->hasMany(Project::class, 'project_area_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
