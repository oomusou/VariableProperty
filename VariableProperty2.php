<?php

class User
{
    /** @var string */  
    public $firstName;
    /** @var string */
    public $lastName;

    /**
     * User constructor.
     * @param string $firstName
     * @param string $lastName
     */
    public function __construct(string $firstName, string $lastName)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }
}

$type = 'first';

$user = new User('Sam', 'Xiao');
$propName = ($type === 'first') ? 'firstName' : 'lastName';

echo($user->$propName);
