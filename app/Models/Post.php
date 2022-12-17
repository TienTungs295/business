<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;
    protected $table='posts';
    protected $fillable = [
        'name',
        'content',
        'image',
        'priority'
    ];

    /**
     * @return HasMany
     */
    public function comments()
    {
        return $this->hasMany(Comment::class, 'post_id');
    }
}
