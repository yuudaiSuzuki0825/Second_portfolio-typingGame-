<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

// バリデーションルールの作成。
class alpha_num_check implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        // 正規表現らしいが…。
        return preg_match('/^[a-zA-Z0-9\.\s\'\,\-\!\?\%\&\$\#\*\;\:]+$/', $value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        // これも必要。
        return trans('validation.alpha_num_check');
    }
}
