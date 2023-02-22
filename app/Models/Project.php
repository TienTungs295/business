<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Project extends Model
{
    use HasFactory;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'project';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'content',
        'image',
        'priority',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return BelongsToMany
     */
    public function projectCategories()
    {
        return $this->belongsToMany(
            ProjectCategory::class,
            'project_project_category',
            'project_id',
            'category_id'
        );
    }

    /**
     * @return BelongsToMany
     */
    public function projectFields()
    {
        return $this->belongsToMany(
            ProjectField::class,
            'project_project_field',
            'project_id',
            'project_field_id'
        );
    }

    public function images()
    {
        return $this->hasMany(Image::class, 'project_id');
    }

    public function projectArea()
    {
        return $this->belongsTo(ProjectArea::class, 'project_area_id');
    }


    protected static function boot()
    {
        parent::boot();

        self::deleting(function (Project $project) {
            $project->projectCategories()->detach();
        });
        self::deleting(function (Project $project) {
            $project->projectFields()->detach();
        });
    }
}
