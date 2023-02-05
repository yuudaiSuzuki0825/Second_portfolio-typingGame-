<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// 論理削除のため。
use Illuminate\Database\Eloquent\SoftDeletes;

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

    // 論理削除のため。
    use SoftDeletes;

    // ？
    protected $dates = ['deleted_at'];
}
