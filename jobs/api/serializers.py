from django.db import models
from django.db.models import fields
from rest_framework import serializers
from jobs.models import JobOffer

#クラスを継承することで簡単に記述可能
class JobOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobOffer
        fields = '__all__'