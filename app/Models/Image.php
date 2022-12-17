<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Image extends Model
{
    use HasFactory;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'project_img';

    protected $fillable = ['id', 'image', 'project_id'];


    /**
     * @return BelongsToMany
     */
    public function projects()
    {
        return $this->belongsTo(Project::class, 'project_id');
    }
}
