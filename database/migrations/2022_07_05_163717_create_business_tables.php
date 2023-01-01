<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('project_category', function (Blueprint $table) {
            $table->id();
            $table->string('name',400);
            $table->text('image')->nullable();
            $table->integer('priority')->nullable();
            $table->integer('user_id');
            $table->timestamps();
        });

        Schema::create('project', function (Blueprint $table) {
            $table->id();
            $table->string('name',400);
            $table->string('slug');
            $table->longText('content')->nullable();
            $table->text('image')->nullable();
            $table->integer('category_id')->unsigned()->nullable();
            $table->integer('priority')->nullable();
            $table->integer('user_id');
            $table->timestamps();
        });

        Schema::create('project_project_category', function (Blueprint $table) {
            $table->id();
            $table->integer('category_id')->unsigned()->index();
            $table->integer('project_id')->unsigned()->index();
        });

        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('avatar', 255)->nullable();
            $table->date('dob')->nullable();
            $table->string('phone', 25)->nullable();
            $table->dateTime('confirmed_at')->nullable();
            $table->string('email_verify_token', 120)->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('customer_password_resets', function (Blueprint $table) {
            $table->string('email')->index();
            $table->string('token')->index();
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('customer_addresses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email', 60)->nullable();
            $table->string('phone');
            $table->string('country', 120)->nullable();
            $table->string('state', 120)->nullable();
            $table->string('city', 120)->nullable();
            $table->string('address');
            $table->integer('customer_id')->unsigned();
            $table->tinyInteger('is_default')->default(0)->unsigned();
            $table->string('zip_code', 20)->nullable();
            $table->timestamps();
        });

        Schema::create('project_img', function (Blueprint $table) {
            $table->id();
            $table->text('image');
            $table->integer('project_id')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
}
