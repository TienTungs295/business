<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category', function (Blueprint $table) {
            $table->id();
            $table->string('name', 400);
            $table->integer('author_id');
            $table->string('author_type', 400);
            $table->integer('priority')->nullable();
            $table->integer('user_id');
            $table->timestamps();
        });

        Schema::create('post', function (Blueprint $table) {
            $table->id();
            $table->string('name', 400);
            $table->string('slug');
            $table->longText('content')->nullable();
            $table->integer('author_id');
            $table->string('author_type', 400);
            $table->string('image', 400)->nullable();
            $table->integer('views')->unsigned()->default(0);
            $table->string('format_type', 30)->nullable();
            $table->integer('priority')->nullable();
            $table->integer('user_id');
            $table->timestamps();
        });

        Schema::create('post_category', function (Blueprint $table) {
            $table->id();
            $table->integer('category_id')->unsigned()->references('id')->on('category')->onDelete('cascade');
            $table->integer('post_id')->unsigned()->references('id')->on('post')->onDelete('cascade');
        });

        Schema::create('comment', function (Blueprint $table) {
            $table->id();
            $table->integer('post_id')->unsigned();
            $table->string('customer_name', 400);
            $table->string('customer_email', 400);
            $table->text('comment');
            $table->tinyInteger('status')->default(1);
            $table->integer('user_id')->nullable();
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
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('post_categories');
        Schema::dropIfExists('posts');
        Schema::dropIfExists('categories');
    }
}
