<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;


class ProjectCategory extends Model implements TranslatableContract
{
    use HasFactory;
    use Translatable;

    protected $table = 'project_category';
    protected $fillable = [
        'id',
        'user_id',
        'priority',
    ];

    public $translatedAttributes = ['name'];

    public function projects()
    {
        return $this->belongsToMany(
            Project::class,
            'project_project_category',
            'category_id',
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

        self::deleting(function (ProjectCategory $project_category) {
            $project_category->projects()->detach();
        });
    }
}
