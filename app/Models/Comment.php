<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    use HasFactory;
    //Enum
    //status 1: Đang chờ, 2:Đã xác nhận
    /**
     * @var string
     */
    protected $table = 'comment';

    /**
     * @var array
     */
    protected $fillable = [
        'id',
        'post_id',
        'customer_name',
        'customer_email',
        'comment',
        'status',
    ];

    protected $appends = ['post_name'];

    /**
     * @return BelongsTo
     */
    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    /**
     * @return string
     */
    public function getPostNameAttribute()
    {
        return $this->post->name;
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
