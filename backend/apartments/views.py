from rest_framework.generics import ListAPIView
from .models import Apartment
from .serializers import ApartmentSerializer

class ApartmentListAPI(ListAPIView):
    queryset = Apartment.objects.all().order_by('-id')
    serializer_class = ApartmentSerializer