<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    public static $employee = 1;
    public static $admin = 2;
    public static $super_admin = 4;
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
    ];

    public function projectCategories()
    {
        return $this->hasMany(ProjectCategory::class, 'user_id');
    }

    public function postCategories()
    {
        return $this->hasMany(PostCategory::class, 'user_id');
    }

    public function projects()
    {
        return $this->hasMany(Project::class, 'user_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'user_id');
    }

    public function projectAreas()
    {
        return $this->hasMany(ProjectArea::class, 'user_id');
    }

    public function projectFields()
    {
        return $this->hasMany(ProjectField::class, 'user_id');
    }

    public function sliders()
    {
        return $this->hasMany(Slider::class, 'user_id');
    }
}
