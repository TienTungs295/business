<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class PostCategory extends Model
{
    use HasFactory;

    protected $table = 'category';
    protected $fillable = [
        'id',
        'name',
        'priority',
    ];

    protected $appends = ['total_posts'];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return BelongsToMany
     */
    public function posts()
    {
        return $this->belongsToMany(
            PostCategory::class,
            'post_category',
            'category_id',
            'post_id'
        );
    }

    public function getTotalPostsAttribute()
    {
        return $this->posts()->count();
    }

    protected static function boot()
    {
        parent::boot();

        self::deleting(function (PostCategory $post_category) {
            $post_category->posts()->detach();
        });
    }

}
