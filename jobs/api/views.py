from django.views import generic
from rest_framework import generics
from jobs.models import JobOffer
from jobs.api.serializers import JobOfferSerializer

#リスト一覧を作成可能
class ListView(generics.ListCreateAPIView):
    queryset = JobOffer.objects.all().order_by('-id')
    serializer_class = JobOfferSerializer

#詳細を作成可能
class DetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobOffer.objects.all()
    serializer_class = JobOfferSerializer