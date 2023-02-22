<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class ProjectArea extends Model
{
    use HasFactory;

    protected $table = 'project_area';
    protected $fillable = [
        'id',
        'name',
        'priority',
    ];

    public function projects()
    {
        return $this->hasMany(Project::class, 'project_area_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
