<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Text extends Model
{
    use HasFactory;

    // リレーション。
    public function user() {
        return $this->belongsTo('App\Models\User');
    }

    // createメソッドのため。
    protected $fillable = [
        'title', 'body', 'user_id',
    ];
}
