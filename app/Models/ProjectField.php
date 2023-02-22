<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class ProjectField extends Model
{
    use HasFactory;

    protected $table = 'project_field';
    protected $fillable = [
        'id',
        'name',
        'priority',
    ];

    public function projects()
    {
        return $this->belongsToMany(
            Project::class,
            'project_project_field',
            'project_field_id',
            'project_id'
        );
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }


    protected static function boot()
    {
        parent::boot();

        self::deleting(function (ProjectField $project_field) {
            $project_field->projects()->detach();
        });
    }
}
