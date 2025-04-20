1. from django.contrib.auth.models import AbstractUser : AbstractUser use kiya jaat hain custome users banane ke liye
   like djsngo jo hain woh built in user model deta hain lekin usheme jo fields hainwoh limited hain agar hame aur fileds add karne hain toh karne keliyeham abstarcuser kause karate hain
2. ab ham serializer banayenge
3.
 ```
   from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth.password_validation import validate_password

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'phone', 'password', 'password2']

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        user = CustomUser.objects.create_user(**validated_data)
        return user
   ```
4. DRF ka ham serializer use kar rahe hain jo hame JSON to object aur object to json me convert karne dega
5 . ishke baad models me se CustomeUser ko import kiya gaya hain
6 . from django.contrib.auth.password_validation import validate_password  yeh jo line hain woh
  - Length

  - Complexity

  - Common passwords

  - Numeric-only password etc. yeh sab cheeck karta hain

7. yeh jo line of code hain password ko authenticate karne ushme restriction add karna aur in sabke liye hain ![image](https://github.com/user-attachments/assets/505253ce-1382-4dd6-a9ca-4b654730606d)
8. `write_only=True:

Iska matlab:

    Ye field sirf input ke liye hai, output (response) me kabhi nahi aayegi.

Yani jab tu serializer.data karega, password nahi dikhega — secure 🔐` yeh kaam karat hain write_only = true karne se 

hamene successfully referesh ey aur access key generate kar liya aur postman se check bhi kar liya a



 

