<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class ProjectCategory extends Model
{
    use HasFactory;

    protected $table = 'project_category';
    protected $fillable = [
        'id',
        'name',
        'image',
        'priority',
    ];

    public function projects()
    {
        return $this->hasMany(Project::class, 'category_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
