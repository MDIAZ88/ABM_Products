app.factory('config', [function () {
    return {
      headerContent: {
        boldTitle : 'TITULO',
        title     : '- Sub titulo',
        products  : 'Productos',
        clients   : 'Clientes'
      },
      tableHeader: {
        productID   : 'Codigo',
        name        : 'Nombre',
        description : 'Descripcion',
        unitPrice   : 'Prec. Costo',
        salePrice   : 'Prec. Venta',
        brand       : 'Marca',
        measurement : 'Unidad',
        quantity    : 'Cantidad',
        provider    : 'Proveedor'
      },
      buttonsLabels: {
        insert : 'Guardar',
        cancel : 'Cancelar',
        update : 'Modificar',
        delete : 'Eliminar'
      },
      titles: {
        insert : 'Ingrese un nuevo producto',
        delete : 'Esta seguro de eliminar el siguiente producto?',
        update : 'Modificar el campo deseado',
        search : 'Buscar por nombre, proveedor o codigo de producto. . .',
        back   : 'volver al listado >>'
      },
      customTexts:{
        min              : 'El codigo tiene que tener 3 digitos como minimo',
        max              : 'El codigo debe tener como maximo 8 digitos',
        verifyTextData   : 'Verifique el dato ingresado',
        verifyNumberData : 'Por favor ingrese un numero'
      },
      regExps:{
        verifyTextData   : '/^[a-zA-Z\u00C0-\u017F]{2}[\sa-zA-Z\.^\-b\u00C0-\u017F]{1,10}$/',
        verifyTextData2  : '/^[a-zA-Z\u00C0-\u017F]{2}[\sa-zA-Z\.^\-b\u00C0-\u017F]{1,40}$/',
        verifyNumberData : '/^[-+]?[0-9]*\.?[0-9]*$/'
      }
    };
  }]);
