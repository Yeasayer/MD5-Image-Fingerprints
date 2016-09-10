<?php
//Canvas Class Object
class Canvas
{

	protected $attributes = [];

	public function __get($key)
	{
		if (array_key_exists($key, $this->attributes))
		{
			return $this->attributes[$key];
		}
		return null;
	}
	public function __set($key, $value)
	{
		$this->attributes[$key] = $value;
	}
	public function fingerprintValue($key)
	{
		if(array_key_exists($key, $this->attributes))
		{
			return md5($this->attributes[$key]);
		}
		return "NOTHING HERE!";
	}
}

?>