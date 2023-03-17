<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;

class Post extends Model implements TranslatableContract
{
    use HasFactory;
    use Translatable;

    protected $table = 'post';
    protected $fillable = [
//        'name',
//        'content',
        'image',
        'priority'
    ];

    public $translatedAttributes = ['name', 'content'];

    protected $appends = ['total_comments'];


    /**
     * @return HasMany
     */
    public function comments()
    {
        return $this->hasMany(Comment::class, 'post_id');
    }

    public function getTotalCommentsAttribute()
    {
        return $this->comments()->where('status',2)->count();
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return BelongsToMany
     */
    public function postCategories()
    {
        return $this->belongsToMany(
            PostCategory::class,
            'post_category',
            'post_id',
            'category_id'
        );
    }

    protected static function boot()
    {
        parent::boot();

        self::deleting(function (Post $post) {
            $post->postCategories()->detach();
        });
    }
}
