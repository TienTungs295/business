<?php

namespace App\Models;

use App\Models\Discount;
use App\Models\Image;
use App\Models\ProjectCategory;
use App\Models\ProjectCollection;
use App\Models\ProjectLabel;
use App\Models\Review;
use App\Models\WithList;
use App\Models\FlashSale;
use \stdClass;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

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


    /**
     * @return BelongsToMany
     */
    public function category()
    {
        return $this->belongsTo(ProjectCategory::class, 'category_id');
    }

    public function images()
    {
        return $this->hasMany(Image::class, 'pro_id');
    }
}
