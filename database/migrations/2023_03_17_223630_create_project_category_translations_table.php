<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectCategoryTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_category_translations', function (Blueprint $table) {
            $table->id();
            $table->string('locale')->index();

            $table->unsignedInteger('project_category_id');
            $table->unique(['project_category_id', 'locale']);

            $table->string('name', 400);
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
        Schema::dropIfExists('project_category_translations');
    }
}
