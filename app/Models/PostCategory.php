<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;


class PostCategory extends Model implements TranslatableContract
{
    use HasFactory;
    use Translatable;

    protected $table = 'category';
    protected $fillable = [
        'id',
//        'name',
        'priority',
    ];
    public $translatedAttributes = ['name'];

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
